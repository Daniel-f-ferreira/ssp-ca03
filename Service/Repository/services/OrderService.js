const orderRepository = require('../repositories/OrderRepository.js');

function getOrder(tableNumber) {
    return orderRepository.getOrder(tableNumber);
}

function insertOrder(order) {
    return orderRepository.insertOrder(order);
}

function updateOrder(order) {
    return orderRepository.updateOrder(order);
}

function deleteOrder(order) {
    return orderRepository.deleteOrder(order);
}

module.exports = { getOrder, insertOrder, updateOrder, deleteOrder };