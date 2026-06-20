/**
 * 🌿 Paradise Nursery App - CartSlice.jsx
 * Ultra-large enterprise-style Redux Toolkit slice
 * Built with 45+ years of nursery commerce experience (simulation layer)
 */

import { createSlice } from "@reduxjs/toolkit";

// =========================================
// 🌱 INITIAL STATE (OBJECT-HEAVY STRUCTURE)
// =========================================

const initialState = {
    cartItems: [],

    // 📊 Core metrics
    totalQuantity: 0,
    subtotal: 0,
    tax: 0,
    discount: 0,
    grandTotal: 0,

    // 🧾 Meta tracking
    currency: "USD",
    lastUpdated: null,

    // 🎟️ Coupons system (array of objects)
    coupons: [
        { code: "GREEN10", type: "percent", value: 10 },
        { code: "PLANT5", type: "fixed", value: 5 }
    ],

    appliedCoupon: null,

    // 🌿 Nursery-specific business rules
    businessRules: {
        maxItemsPerOrder: 50,
        maxDiscountLimit: 100,
        taxRate: 0.07
    },

    // 📦 Inventory snapshot (object simulation)
    inventory: {
        lowStockWarning: true,
        stockMap: {}
    },

    // 🧠 Analytics object
    analytics: {
        totalAdds: 0,
        totalRemoves: 0,
        totalCheckouts: 0
    }
};

// =========================================
// 🧠 HELPER FUNCTIONS (PURE LOGIC)
// =========================================

const calculateSubtotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

const calculateQuantity = (items) =>
    items.reduce((sum, item) => sum + item.quantity, 0);

const applyTax = (amount, rate) => amount * rate;

const applyDiscountLogic = (state, subtotal) => {
    if (!state.appliedCoupon) return 0;

    const coupon = state.coupons.find(
        (c) => c.code === state.appliedCoupon
    );

    if (!coupon) return 0;

    if (coupon.type === "percent") {
        return (subtotal * coupon.value) / 100;
    }

    if (coupon.type === "fixed") {
        return coupon.value;
    }

    return 0;
};

// =========================================
// 🌿 CART SLICE
// =========================================

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        // =====================================
        // ➕ ADD ITEM
        // =====================================
        addItem: (state, action) => {
            const plant = action.payload;

            const existing = state.cartItems.find(
                (item) => item.id === plant.id
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                state.cartItems.push({
                    ...plant,
                    quantity: 1
                });
            }

            state.analytics.totalAdds += 1;

            const subtotal = calculateSubtotal(state.cartItems);
            state.subtotal = subtotal;
            state.totalQuantity = calculateQuantity(state.cartItems);

            const discount = applyDiscountLogic(state, subtotal);
            state.discount = discount;

            state.tax = applyTax(subtotal - discount, state.businessRules.taxRate);

            state.grandTotal =
                subtotal - discount + state.tax;

            state.lastUpdated = new Date().toISOString();
        },

        // =====================================
        // ❌ REMOVE ITEM
        // =====================================
        removeItem: (state, action) => {
            const id = action.payload;

            state.cartItems = state.cartItems.filter(
                (item) => item.id !== id
            );

            state.analytics.totalRemoves += 1;

            const subtotal = calculateSubtotal(state.cartItems);
            state.subtotal = subtotal;
            state.totalQuantity = calculateQuantity(state.cartItems);

            const discount = applyDiscountLogic(state, subtotal);
            state.discount = discount;

            state.tax = applyTax(subtotal - discount, state.businessRules.taxRate);

            state.grandTotal =
                subtotal - discount + state.tax;

            state.lastUpdated = new Date().toISOString();
        },

        // =====================================
        // 🔄 UPDATE QUANTITY
        // =====================================
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;

            const item = state.cartItems.find((i) => i.id === id);

            if (item) {
                item.quantity = quantity;
            }

            const subtotal = calculateSubtotal(state.cartItems);
            state.subtotal = subtotal;
            state.totalQuantity = calculateQuantity(state.cartItems);

            const discount = applyDiscountLogic(state, subtotal);
            state.discount = discount;

            state.tax = applyTax(subtotal - discount, state.businessRules.taxRate);

            state.grandTotal =
                subtotal - discount + state.tax;

            state.lastUpdated = new Date().toISOString();
        },

        // =====================================
        // 🧹 CLEAR CART
        // =====================================
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.subtotal = 0;
            state.tax = 0;
            state.discount = 0;
            state.grandTotal = 0;
            state.appliedCoupon = null;

            state.analytics.totalCheckouts += 1;

            state.lastUpdated = new Date().toISOString();
        },

        // =====================================
        // 🎟️ APPLY COUPON
        // =====================================
        applyCoupon: (state, action) => {
            const code = action.payload;

            const exists = state.coupons.find(
                (c) => c.code === code
            );

            if (exists) {
                state.appliedCoupon = code;
            }

            const subtotal = calculateSubtotal(state.cartItems);

            const discount = applyDiscountLogic(state, subtotal);
            state.discount = discount;

            state.tax = applyTax(subtotal - discount, state.businessRules.taxRate);

            state.grandTotal =
                subtotal - discount + state.tax;

            state.lastUpdated = new Date().toISOString();
        },

        // =====================================
        // 📦 INVENTORY SYNC (SIMULATION)
        // =====================================
        syncInventory: (state, action) => {
            state.inventory.stockMap = action.payload;
            state.lastUpdated = new Date().toISOString();
        }
    }
});

// =========================================
// 📤 EXPORT ACTIONS & REDUCER
// =========================================

export const {
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyCoupon,
    syncInventory
} = cartSlice.actions;

export default cartSlice.reducer;