package com.example.demo.controllers;

import com.example.demo.dto.UsersDTO;
import com.example.demo.dto.request.UsersRequestDTO;
import com.example.demo.dto.response.UsersResponseDTO;
import com.example.demo.dto.request.AuthRequestDTO;
import com.example.demo.dto.response.AuthResponseDTO;
import com.example.demo.dto.request.TokenValidationRequestDTO;
import com.example.demo.services.CustomUserDetailsService;
import com.example.demo.services.TokenBlacklistService;
import com.example.demo.services.UsersService;
import com.example.demo.utils.JwtTokenUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class AuthController {

    private final ModelMapper modelMapper;
    private final AuthenticationManager authenticationManager;
    private final UsersService usersService;
    private final JwtTokenUtil jwtTokenUtil;
    private final CustomUserDetailsService customUserDetailsService;
    private final TokenBlacklistService tokenBlacklistService;

    public AuthController(UsersService usersService, AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil, CustomUserDetailsService userDetailsService,
                          TokenBlacklistService tokenBlacklistService, ModelMapper modelMapper) {
        this.usersService = usersService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.customUserDetailsService = userDetailsService;
        this.tokenBlacklistService = tokenBlacklistService;
        this.modelMapper = modelMapper;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/register")
    public UsersResponseDTO createUser(@Valid @RequestBody UsersRequestDTO usersRequest) {
        UsersDTO usersDTO = mapToUsersDTO(usersRequest);
        usersDTO = usersService.createUsers(usersDTO);
        return mapToUsersResponse(usersDTO);
    }

    @PostMapping("/login")
    public AuthResponseDTO authenticateUser(@RequestBody AuthRequestDTO authRequest) throws Exception {
        authenticate(authRequest);
        final UserDetails userDetails = customUserDetailsService.loadUserByUsername(authRequest.getEmail());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return new AuthResponseDTO(token, authRequest.getEmail());
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PostMapping("/logout")
    public void logOut(HttpServletRequest request) {
        String jwtToken = extractJwtTokenFromRequest(request);
        if (jwtToken != null) {
            tokenBlacklistService.addTokenToBlacklist(jwtToken);
        }
    }

    @PostMapping("/validate-token")
    public ResponseEntity<String> checkTokenValidity(@RequestBody TokenValidationRequestDTO tokenValidationRequest) {
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(tokenValidationRequest.getEmail());
        if (jwtTokenUtil.validateToken(tokenValidationRequest.getToken(), userDetails)) {
            return new ResponseEntity<>("Token is valid", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Token is invalid", HttpStatus.UNAUTHORIZED);
        }
    }

    private String extractJwtTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    private void authenticate(AuthRequestDTO authRequest) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        } catch (DisabledException ex) {
            throw new Exception("Profile disabled");
        }
    }

    private UsersDTO mapToUsersDTO(UsersRequestDTO req) {
        return modelMapper.map(req, UsersDTO.class);
    }

    private UsersResponseDTO mapToUsersResponse(UsersDTO dto) {
        return modelMapper.map(dto, UsersResponseDTO.class);
    }
}
