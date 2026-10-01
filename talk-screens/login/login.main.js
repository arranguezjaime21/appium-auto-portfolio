export const LoginScreen = { 
    driver: null,

    selectors: {
        loginBtn: 'id=com.fdc_machetalk_broadcaster:id/tvLogin',
        snsEmail: 'id=com.fdc_machetalk_broadcaster:id/btnOtherMethod',
        snsEmailConfirm: 'id=com.fdc_machetalk_broadcaster:id/btnLogin',
        inputEmail: 'id=com.fdc_machetalk_broadcaster:id/txtEmail',
        inputPassword: 'id=com.fdc_machetalk_broadcaster:id/txtPassword',
        signinBtn: 'id=com.fdc_machetalk_broadcaster:id/btnLogin',
        errorWording: 'id=com.fdc_machetalk_broadcaster:id/tvErrorMsg',
        permissionModal: 'id=com.fdc_machetalk_broadcaster:id/ll_permission_dialog',
    },

    async loginNav() {
        const el = await this.driver.$(this.selectors, snsEmail);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.click();
    }, 
    
    async snsEmailSignIn() { 
        const el = await this.driver.$(this.selectors, snsEmail);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.click();
    },

    async snsEmailConfirm() {
        const el = await this.driver.$(this.selectors, this.snsEmailConfirm);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.click();
    },

    async inputUserEmail(email) { 
        const el = await this.driver.$(this.selectors, this.inputEmail);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.clearValue();
        await el.setValue(email);
    },

    async inputUserPassword(password) { 
        const el = await this.driver.$(this.selectors, inputPassword);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.clearValue();
        await el.setValue(password);
    },

    async loginBtn() {
        const el = await this.driver.$(this.selectors, signinBtn);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.waitForEnabled({ timeout: 5000 });
        await el.click();
    },

    async errMsg() { 
        const el = await this.driver.$(this.selectors, errorWording);
        await el.waitForDisplayed({ timeout: 5000 });
        return await el.getText();
    },

    async permission() { 
        const el = await this.driver.$(this.selectors, permissionModal);
        return await el.isDisplayed();
    }


}