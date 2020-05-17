package com.interview.libraries.controllers;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;



@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class LibraryControllerTest {


    @Autowired
    private LibraryController libraryController;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void whenLibraryControllerInjected_thenNotNull() throws Exception {
        assertNotNull(libraryController);
    }

    @Test
    public void whenGetRequestToBookEndPoint_thenCorrectResponse() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/books/getBooks").contentType(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.*",hasSize(4)));

    }

    @Test
    public void whenPostRequestToAddBookEndpoint_thenCorrectResponse() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders.post("/books/add").contentType(MediaType.APPLICATION_JSON).content("{\n" +
                "  \"isbn\":\"TEST_ISBN1\",\n" +
                "  \"title\":\"TEST_TITLE1\",\n" +
                "  \"publisher\":\"TEST_PUBLISHER\",\n" +
                "  \"author\":[{\"firstName\":\"rajan\",\"lastName\":\"Mishra\"}],\n" +
                "  \"copies\":10\n" +
                "}")).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.*",hasSize(5)));
    }

    @Test
    public void whenPostRequestToDeleteBookEndpoint_thenCorrectResponse() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders.post("/books/delete").contentType(MediaType.APPLICATION_JSON).content("{\n" +
                "  \"isbn\":\"9780307274281\",\n" +
                "  \"title\":\"Monk who sold his ferrari\",\n" +
                "  \"publisher\":\"Harper Collins\",\n" +
                "  \"author\":[{\"name\":\"Robin Sharma\"}],\n" +
                "  \"copies\":3\n" +
                "}")).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.*",hasSize(4)));
    }



}