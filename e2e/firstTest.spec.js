describe('Example', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('navigates to first users\' details screen and views address information', async () => {
        await expect(element(by.id('user-list'))).toBeVisible();
        await element(by.id('view-details-button-0')).tap();
        await element(by.id('expandable-panel-switch')).tap();
        await expect(element(by.id('address-details'))).toBeVisible();
    });

});
