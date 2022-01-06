const menuRepository = require('../repositories/MenuRepository.js');

function transformerMenuXSLT() {
    return menuRepository.transformerMenuXSLT();
}

function transformerMenuManagementXSLT() {
    return menuRepository.transformerMenuManagementXSLT();
}

function insertMenuItem(menuItem) {
    return menuRepository.insertMenuItem(menuItem);
}

function deleteMenuItem(menuItem) {
    return menuRepository.deleteMenuItem(menuItem);
}

module.exports = { transformerMenuXSLT, transformerMenuManagementXSLT, insertMenuItem, deleteMenuItem };