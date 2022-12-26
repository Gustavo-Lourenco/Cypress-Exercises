const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTING: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET:'[href="/reset"]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: "//table[@class='table']//tr[contains(. , 'Conta Teste 6')]//i[@class='far fa-edit']",
    },
    MOVIMENTACAO: {
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        DESCRICAO: '[data-test=descricao]',
        INTERESSADO: '[data-test=envolvido]',
        VALOR: '[data-test=valor]',
        BTN_SALVAR: '.btn-primary'
    },
    MESSAGE: '//div[@id=\'toast-container\']'
}

export default locators;