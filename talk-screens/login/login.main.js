export const LoginScreen = { 
    driver: null,

    selectors: {
        loginMail: 'id=com.fdc_machetalk_broadcaster:id/tvLogin',
        snsEmail: 'id=com.fdc_machetalk_broadcaster:id/btnOtherMethod',
        loginBtn: 'id=com.fdc_machetalk_broadcaster:id/btnLogin',
        inputEmail: 'id=com.fdc_machetalk_broadcaster:id/txtEmail',
        inputPassword: 'id=com.fdc_machetalk_broadcaster:id/txtPassword',
        errorWording: 'id=com.fdc_machetalk_broadcaster:id/tvErrorMsg',
        permissionModal: 'id=com.fdc_machetalk_broadcaster:id/ll_permission_dialog',
    },


    async mailLogin() { 
        const el = await this.driver.$(this.selectors.loginMail);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.click();
    },

    async snsEmail() {
        const el = await this.driver.$(this.selectors.snsEmail);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.click();
    },

    async loginBtn() { 
        const el = await this.driver.$(this.selectors.loginBtn);
        await el.waitForDisplayed({ timeout: 5000});
        await el.click();
    },

    async inputEmail(email) { 
        const el = await this.driver.$(this.selectors.inputEmail);
        await el.clearValue();
        await el.setValue(email);
    },

    async inputPassword(password) { 
        const el = await this.driver.$(this.selectors.inputPassword);
        await el.clearValue();
        await el.setValue(password);
    },

    async errorWording() { 
        const el = await this.driver.$(this.selectors.errorWording);
        await el.waitForDisplayed({ timeout: 5000 });
        return el.getText();
    },

    async permissionModal() { 
        const el = await this.driver.$(this.selectors.permissionModal);
        await el.waitForDisplayed({ timeout: 5000 });
        return el.isDisplayed();
    },

    async loginBtnState() {
        const el = await this.driver.$(this.selectors.loginBtn);
        await el.waitForDisplayed({ timeout: 5000 });
        return el.isEnabled();
    },

    async loginFlow({ email, password }) { 
        await this.mailLogin();
        await this.snsEmail();
        await this.inputEmail(email);
        await this.inputPassword(password);
        await this.loginBtn();
    },

    async snsLoginNav() { 
        await this.mailLogin();
        await this.snsEmail();
    },
}