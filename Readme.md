Carting Assessment - BuyAll Feature
Requirements:
Implementation of a BuyAll feature for an e-commerce cart with confirmation modal, backend validation, and order history.
Implementation:
•	BuyAll button (enabled only when cart has items)
•	Confirmation modal showing total price and item count
•	Backend API endpoint with validation
•	Purchase data saved to the backend
•	Success/error handling with toast notifications
Changes Made
Frontend Changes
1. Created New Component
•	src/components/BuyAllModal.jsx - Confirmation modal with Yes/No buttons
2. Modified Cart Page
•	src/pages/Cart.jsx 
o	Added BuyAll button above Secure Checkout
o	Added modal state management
o	Added handleBuyAllClick() and handleBuyAllConfirm() functions
o	Integrated API call to /api/cart/buyall
Backend Changes
1. Created New Model
•	server/models/order.js - Order schema for storing purchase history
2. Updated Cart Controller
•	server/controllers/cartController.js 
o	Added buyAll() function with: 
•	User authentication validation
•	Cart items validation
•	Total price calculation (rounded to 2 decimals)
•	Order creation and saving
•	Cart clearing after purchase
3. Added New Route
•	server/routes/cartRoutes.js 
o	Added POST /api/cart/buyall route

