# Sample Bug Reports

This section contains sample mock defect reports to demonstrate the ability to document bugs effectively.

---

### BUG-001: Shopping Cart icon text overlaps on mobile screens

**Environment:**

- **OS**: iOS 16
- **Device**: iPhone 13 Pro
- **Browser**: Safari Mobile
- **URL**: https://demowebshop.tricentis.com/

**Severity:** Minor
**Priority:** Medium

**Steps to Reproduce:**

1. Open up the Demo Web Shop web application on an iPhone 13 Pro.
2. Add a product to the cart.
3. Observe the cart link counter in the top-right header area.

**Expected Result:**
The shopping cart counter text (e.g., "(1)") should align properly next to the "Shopping cart" text label and icon without breaking the layout.

**Actual Result:**
The text label breaks onto a new line and overlaps with the site's main search bar, making it difficult to read and tap.

**Attachments:**

- `screenshot_cart_overlap.png` (Mocked)

---

### BUG-002: "Free Shipping" method occasionally fails to apply correctly

**Environment:**

- **OS**: Windows 11
- **Browser**: Google Chrome (v114)
- **URL**: https://demowebshop.tricentis.com/

**Severity:** Major
**Priority:** High

**Steps to Reproduce:**

1. Login to a registered customer account.
2. Add items to the cart totaling over $500 (the expected free shipping threshold).
3. Proceed to the Checkout phase.
4. Reach the 'Shipping Method' accordion tab.

**Expected Result:**
The 'Ground ($0.00)' free shipping option should be automatically available or selected for orders over the $500 threshold.

**Actual Result:**
Users are still charged a default $10.00 flat rate for 'Ground' shipping despite having over $500 worth of merchandise in their cart.

**Attachments:**

- `video_shipping_bug_repro.mp4` (Mocked)
