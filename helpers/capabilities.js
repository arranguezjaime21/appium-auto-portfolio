export const emulatorCaps = { 
    "platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "emulator",
    "appium:appPackage": "com.fdc_macehtalk_broadcaster",
    "appium:appActivity": "com.fdc_machetalk_broadcaster.Activity.RootActivity", 
    "appium:noReset": true
}
 
export const emulatorCapsReset = { 
    ...emulatorCaps, 
    "appium:noReset": false
}