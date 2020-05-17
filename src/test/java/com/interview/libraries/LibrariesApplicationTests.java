package com.interview.libraries;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = LibrariesApplication.class, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
class LibrariesApplicationTests {

	public static final String URL = "http://localhost";

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	protected WebApplicationContext wac;

	@Before
	public void setup() {
		mockMvc = webAppContextSetup(wac).build();
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
