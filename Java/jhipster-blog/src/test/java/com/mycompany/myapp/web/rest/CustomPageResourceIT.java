package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.JhipsterblogApp;
import com.mycompany.myapp.domain.CustomPage;
import com.mycompany.myapp.repository.CustomPageRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link CustomPageResource} REST controller.
 */
@SpringBootTest(classes = JhipsterblogApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class CustomPageResourceIT {

    private static final String DEFAULT_TITLE = "AAAAAAAAAA";
    private static final String UPDATED_TITLE = "BBBBBBBBBB";

    private static final String DEFAULT_LINK = "AAAAAAAAAA";
    private static final String UPDATED_LINK = "BBBBBBBBBB";

    private static final String DEFAULT_CONTENT = "AAAAAAAAAA";
    private static final String UPDATED_CONTENT = "BBBBBBBBBB";

    @Autowired
    private CustomPageRepository customPageRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restCustomPageMockMvc;

    private CustomPage customPage;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static CustomPage createEntity(EntityManager em) {
        CustomPage customPage = new CustomPage()
            .title(DEFAULT_TITLE)
            .link(DEFAULT_LINK)
            .content(DEFAULT_CONTENT);
        return customPage;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static CustomPage createUpdatedEntity(EntityManager em) {
        CustomPage customPage = new CustomPage()
            .title(UPDATED_TITLE)
            .link(UPDATED_LINK)
            .content(UPDATED_CONTENT);
        return customPage;
    }

    @BeforeEach
    public void initTest() {
        customPage = createEntity(em);
    }

    @Test
    @Transactional
    public void createCustomPage() throws Exception {
        int databaseSizeBeforeCreate = customPageRepository.findAll().size();
        // Create the CustomPage
        restCustomPageMockMvc.perform(post("/api/custom-pages")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(customPage)))
            .andExpect(status().isCreated());

        // Validate the CustomPage in the database
        List<CustomPage> customPageList = customPageRepository.findAll();
        assertThat(customPageList).hasSize(databaseSizeBeforeCreate + 1);
        CustomPage testCustomPage = customPageList.get(customPageList.size() - 1);
        assertThat(testCustomPage.getTitle()).isEqualTo(DEFAULT_TITLE);
        assertThat(testCustomPage.getLink()).isEqualTo(DEFAULT_LINK);
        assertThat(testCustomPage.getContent()).isEqualTo(DEFAULT_CONTENT);
    }

    @Test
    @Transactional
    public void createCustomPageWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = customPageRepository.findAll().size();

        // Create the CustomPage with an existing ID
        customPage.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restCustomPageMockMvc.perform(post("/api/custom-pages")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(customPage)))
            .andExpect(status().isBadRequest());

        // Validate the CustomPage in the database
        List<CustomPage> customPageList = customPageRepository.findAll();
        assertThat(customPageList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkTitleIsRequired() throws Exception {
        int databaseSizeBeforeTest = customPageRepository.findAll().size();
        // set the field null
        customPage.setTitle(null);

        // Create the CustomPage, which fails.


        restCustomPageMockMvc.perform(post("/api/custom-pages")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(customPage)))
            .andExpect(status().isBadRequest());

        List<CustomPage> customPageList = customPageRepository.findAll();
        assertThat(customPageList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkLinkIsRequired() throws Exception {
        int databaseSizeBeforeTest = customPageRepository.findAll().size();
        // set the field null
        customPage.setLink(null);

        // Create the CustomPage, which fails.


        restCustomPageMockMvc.perform(post("/api/custom-pages")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(customPage)))
            .andExpect(status().isBadRequest());

        List<CustomPage> customPageList = customPageRepository.findAll();
        assertThat(customPageList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllCustomPages() throws Exception {
        // Initialize the database
        customPageRepository.saveAndFlush(customPage);

        // Get all the customPageList
        restCustomPageMockMvc.perform(get("/api/custom-pages?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(customPage.getId().intValue())))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE)))
            .andExpect(jsonPath("$.[*].link").value(hasItem(DEFAULT_LINK)))
            .andExpect(jsonPath("$.[*].content").value(hasItem(DEFAULT_CONTENT)));
    }
    
    @Test
    @Transactional
    public void getCustomPage() throws Exception {
        // Initialize the database
        customPageRepository.saveAndFlush(customPage);

        // Get the customPage
        restCustomPageMockMvc.perform(get("/api/custom-pages/{id}", customPage.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(customPage.getId().intValue()))
            .andExpect(jsonPath("$.title").value(DEFAULT_TITLE))
            .andExpect(jsonPath("$.link").value(DEFAULT_LINK))
            .andExpect(jsonPath("$.content").value(DEFAULT_CONTENT));
    }
    @Test
    @Transactional
    public void getNonExistingCustomPage() throws Exception {
        // Get the customPage
        restCustomPageMockMvc.perform(get("/api/custom-pages/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateCustomPage() throws Exception {
        // Initialize the database
        customPageRepository.saveAndFlush(customPage);

        int databaseSizeBeforeUpdate = customPageRepository.findAll().size();

        // Update the customPage
        CustomPage updatedCustomPage = customPageRepository.findById(customPage.getId()).get();
        // Disconnect from session so that the updates on updatedCustomPage are not directly saved in db
        em.detach(updatedCustomPage);
        updatedCustomPage
            .title(UPDATED_TITLE)
            .link(UPDATED_LINK)
            .content(UPDATED_CONTENT);

        restCustomPageMockMvc.perform(put("/api/custom-pages")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedCustomPage)))
            .andExpect(status().isOk());

        // Validate the CustomPage in the database
        List<CustomPage> customPageList = customPageRepository.findAll();
        assertThat(customPageList).hasSize(databaseSizeBeforeUpdate);
        CustomPage testCustomPage = customPageList.get(customPageList.size() - 1);
        assertThat(testCustomPage.getTitle()).isEqualTo(UPDATED_TITLE);
        assertThat(testCustomPage.getLink()).isEqualTo(UPDATED_LINK);
        assertThat(testCustomPage.getContent()).isEqualTo(UPDATED_CONTENT);
    }

    @Test
    @Transactional
    public void updateNonExistingCustomPage() throws Exception {
        int databaseSizeBeforeUpdate = customPageRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCustomPageMockMvc.perform(put("/api/custom-pages")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(customPage)))
            .andExpect(status().isBadRequest());

        // Validate the CustomPage in the database
        List<CustomPage> customPageList = customPageRepository.findAll();
        assertThat(customPageList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteCustomPage() throws Exception {
        // Initialize the database
        customPageRepository.saveAndFlush(customPage);

        int databaseSizeBeforeDelete = customPageRepository.findAll().size();

        // Delete the customPage
        restCustomPageMockMvc.perform(delete("/api/custom-pages/{id}", customPage.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<CustomPage> customPageList = customPageRepository.findAll();
        assertThat(customPageList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
