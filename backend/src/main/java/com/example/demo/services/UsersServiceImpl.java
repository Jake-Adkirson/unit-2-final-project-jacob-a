package com.example.demo.services;

import com.example.demo.dto.UsersDTO;
import com.example.demo.exceptions.ItemAlreadyExistsException;
import com.example.demo.models.Users;
import com.example.demo.repositories.UsersRepository;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements UsersService {

    private final ModelMapper modelMapper;
    private final UsersRepository usersRepository;
    private final PasswordEncoder encoder;

    public UsersServiceImpl(ModelMapper modelMapper, UsersRepository usersRepository, PasswordEncoder encoder) {
        this.modelMapper = modelMapper;
        this.usersRepository = usersRepository;
        this.encoder = encoder;
    }

    @Override
    public UsersDTO createUsers(UsersDTO usersDTO) {
        if (usersRepository.existsByEmail(usersDTO.getEmail())) {
            throw new ItemAlreadyExistsException("Profile already exists for " + usersDTO.getEmail());
        }
        usersDTO.setPassword(encoder.encode(usersDTO.getPassword()));
        Users users = mapToProfileEntity(usersDTO);
        users = usersRepository.save(users);
        return mapToProfileDTO(users);
    }

    // Map values from entity to DTO
    private UsersDTO mapToProfileDTO(Users profileEntity) {
        return modelMapper.map(profileEntity, UsersDTO.class);
    }

    // Map values from DTO to entity
    private Users mapToProfileEntity(UsersDTO profileDTO) {
        return modelMapper.map(profileDTO, Users.class);
    }
}
