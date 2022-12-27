const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTING: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET:'[href="/reset"]',
        HOME:'[data-test=menu-home]',
        EXTRATO:'[data-test=menu-extrato]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        FN_XP_BTN_ALTERAR: (conta) => `//table[@class='table']//tr[contains(. , '${conta}')]//i[@class='far fa-edit']`,
    },
    MOVIMENTACAO: {
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        DESCRICAO: '[data-test=descricao]',
        INTERESSADO: '[data-test=envolvido]',
        VALOR: '[data-test=valor]',
        CONTA: '[data-test=conta]',
        BTN_SALVAR: '.btn-primary',
        BTN_CONTA_PAGA: '[data-test=status]'
    },
    MESSAGE: '//div[@id=\'toast-container\']',
    HOME: {
        FN_XP_CONTA: nome => `//table[@class='table table-hover table-bordered']//td[contains(., '${nome}')]`,
        FN_XP_SALDO: (nome, value) => `//table[@class='table table-hover table-bordered']//td[contains(., '${nome}')]/..//td[contains(., '${value}')]`
    }, 
    EXTRATO: {
        FN_XP_BTN_EXCLUIR: (conta) =>  `//div[@class='list-group']//span[contains(., '${conta}')]/../../..//div[@class='col col-md-1']//i[@class='far fa-trash-alt']`,
        FN_XP_BTN_EDITAR: (conta) =>   `//div[@class='list-group']//span[contains(., '${conta}')]/../../..//div[@class='col col-md-1']//i[@class='fas fa-edit']`
    }
}

export default locators;