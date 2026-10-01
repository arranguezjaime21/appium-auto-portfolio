export const LoginScreen = { 
    driver: null, 

    loginBtn: 'android.com/loginBtn',
    inputEmail: 'android.com/email',
    inputPassword: 'android.com/pass',
    errMsg: 'android.com/errorMsg',


    async navEmailLogin() { 
        const el = await this.driver.$(loginBtn);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.waitForEnabled({ timeout: 5000 });
        await el.click();
    },

    async emailField({email}) {
        const el = await this.driver.$(this.inputEmail);
        await el.clearValue();
        await el.setValue(email);
    }, 

    async passField(password) { 
        const el = await this.driver.$(this.inputPassword);
        await el.clearValue();
        await el.setValue(password);
    },

    async loginUser() { 
        const el = await this.driver.$(this.loginBtn);
        await el.waitForDisplayed({ timeout: 5000 });
        await el.waitForEnabled({ timeout: 3000 });
        await el.click();
    }, 

    async errorWording() { 
        const el = await this.driver.$(this.errMsg);
        await el.waitForDisplayed({ timeout: 5000 });
        return await el.getText();
    }, 

    async loginState() { 
        const el = await this.driver.$(this.loginBtn);
        const state = await el.isEnabled({ timeout: 5000 });
        return state === true || state == 'true';
    },

    async loginFlow({ email, password}) { 
        await this.emailField(email);
        await this.passField(password);
        await this.loginUser();
    }

}