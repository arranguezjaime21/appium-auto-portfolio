import { remote } from "webdriverio";
import { emulatorCaps } from "../../helpers/capabilities";
import { LoginScreen } from "../../talk-screens/login/login.main";
import { expect } from "chai";

describe('Login Screen', function() { 
    let driver;
    this.timeout(12000);

    before(async function() {
        driver = await remote({
            path: "/",
            port: 4723,
            hostname: "127.0.0.1",
            capabilities: emulatorCaps,
        });

        LoginScreen.driver = driver;
    });

    after(async function () {
        if(driver) {
            await driver.deleteSession();
        }
    });


    it('should display error message for incorrect email/password', async function() {
        await LoginScreen.loginFlow({
            email: "email@gmail.com",
            password: "wrongpass",
        });

        expect(await LoginScreen.errorWording()).to.equal("error-wording");
    });

    it('should enable login button when email/pass already populated', async function() {
        await LoginScreen.snsLoginNav();
        expect(await LoginScreen.loginBtnState()).to.be.false;

        await LoginScreen.inputEmail("sample@gmail.com");
        expect(await LoginScreen.loginBtnState()).to.be.false;

        await LoginScreen.inputPassword("admin");
        expect(await LoginScreen.loginBtnState()).to.be.true;
    });

    it('should succesfully login user and displayed permission modal', async function() {
        await LoginScreen.loginFlow({
            email: "email@mail.com",
            password: "admin",
        });

        expect(await LoginScreen.permissionModal()).to.be.true;
    })
})