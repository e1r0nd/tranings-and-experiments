package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.CustomPage;
import com.mycompany.myapp.repository.CustomPageRepository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.CustomPage}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class CustomPageResource {

    private final Logger log = LoggerFactory.getLogger(CustomPageResource.class);

    private static final String ENTITY_NAME = "customPage";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final CustomPageRepository customPageRepository;

    public CustomPageResource(CustomPageRepository customPageRepository) {
        this.customPageRepository = customPageRepository;
    }

    /**
     * {@code POST  /custom-pages} : Create a new customPage.
     *
     * @param customPage the customPage to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new customPage, or with status {@code 400 (Bad Request)} if the customPage has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/custom-pages")
    public ResponseEntity<CustomPage> createCustomPage(@Valid @RequestBody CustomPage customPage) throws URISyntaxException {
        log.debug("REST request to save CustomPage : {}", customPage);
        if (customPage.getId() != null) {
            throw new BadRequestAlertException("A new customPage cannot already have an ID", ENTITY_NAME, "idexists");
        }
        CustomPage result = customPageRepository.save(customPage);
        return ResponseEntity.created(new URI("/api/custom-pages/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /custom-pages} : Updates an existing customPage.
     *
     * @param customPage the customPage to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated customPage,
     * or with status {@code 400 (Bad Request)} if the customPage is not valid,
     * or with status {@code 500 (Internal Server Error)} if the customPage couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/custom-pages")
    public ResponseEntity<CustomPage> updateCustomPage(@Valid @RequestBody CustomPage customPage) throws URISyntaxException {
        log.debug("REST request to update CustomPage : {}", customPage);
        if (customPage.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        CustomPage result = customPageRepository.save(customPage);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, customPage.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /custom-pages} : get all the customPages.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of customPages in body.
     */
    @GetMapping("/custom-pages")
    public ResponseEntity<List<CustomPage>> getAllCustomPages(Pageable pageable) {
        log.debug("REST request to get a page of CustomPages");
        Page<CustomPage> page = customPageRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /custom-pages/:id} : get the "id" customPage.
     *
     * @param id the id of the customPage to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the customPage, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/custom-pages/{id}")
    public ResponseEntity<CustomPage> getCustomPage(@PathVariable Long id) {
        log.debug("REST request to get CustomPage : {}", id);
        Optional<CustomPage> customPage = customPageRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(customPage);
    }

    /**
     * {@code DELETE  /custom-pages/:id} : delete the "id" customPage.
     *
     * @param id the id of the customPage to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/custom-pages/{id}")
    public ResponseEntity<Void> deleteCustomPage(@PathVariable Long id) {
        log.debug("REST request to delete CustomPage : {}", id);
        customPageRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
