package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class CustomPageTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(CustomPage.class);
        CustomPage customPage1 = new CustomPage();
        customPage1.setId(1L);
        CustomPage customPage2 = new CustomPage();
        customPage2.setId(customPage1.getId());
        assertThat(customPage1).isEqualTo(customPage2);
        customPage2.setId(2L);
        assertThat(customPage1).isNotEqualTo(customPage2);
        customPage1.setId(null);
        assertThat(customPage1).isNotEqualTo(customPage2);
    }
}
