const { errorResponser } = require('../libs/controller-helper');

const Order = require('../models/order');
const Store = require('../models/store');

module.exports = async ctx => {
    const {
        currentUser: {
            id: userId,
            type,
        } = {},
    } = ctx;

    const theUserOrders = await Order.getCurrentMonthOrderByCustomerId({
        userId,
    });

    ctx.body = theUserOrders;
    
    return true;
}