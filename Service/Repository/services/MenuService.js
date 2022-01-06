const menuRepository = require('../repositories/MenuRepository.js');

function transformerXSLT() {
    return menuRepository.transformerXSLT();
}

function getAllMenuItem() {
    return menuRepository.getAllMenuItem();
}

function insertMenuItem(menuItem) {
    return menuRepository.insertMenuItem(menuItem);
}

function deleteMenuItem(menuItem) {
    return menuRepository.deleteMenuItem(menuItem);
}

module.exports = { transformerXSLT, getAllMenuItem, insertMenuItem, deleteMenuItem };