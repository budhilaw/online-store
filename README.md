# GameTech Store - Gaming E-commerce Platform

A modern, single-vendor gaming store built with SvelteKit and TailwindCSS, featuring a dark gaming theme and Indonesian localization. Designed for deployment on GitHub Pages without any external dependencies.

## 🎮 Features

### Core Features
- **Gaming-Focused Design**: Dark theme with cyan/purple gradients and gaming aesthetics
- **Indonesian Localization**: IDR currency, Indonesian addresses, and local payment methods
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Static Site Generation**: Optimized for GitHub Pages deployment
- **No Database Required**: All data is hardcoded for portfolio demonstration
- **UUID-based Products**: Professional product identification with SEO-friendly slugs
- **Real Product Images**: High-quality gaming product photography

### Customer Features ✅
- **Homepage**: Hero section with featured gaming products and company stats
- **Shop Page**: Complete product catalog with search, filtering, and sorting
- **Product Detail Pages**: Image galleries with thumbnail selection and detailed specs
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Checkout Process**: 3-step checkout (Customer Info → Shipping → Payment)
- **Payment System**: Indonesian bank transfer with BCA, Mandiri, and BNI
- **Toast Notifications**: Professional notifications for cart actions
- **Legal Pages**: Terms, Privacy, Shipping, and Returns policies

### Admin Features ✅
- **Dashboard**: Real-time analytics with sales metrics and order tracking
- **Product Management**: Complete CRUD operations with 8 gaming products
- **Order Management**: Invoice tracking with Indonesian customer data
- **User Management**: Admin user management with role-based access
- **Authentication**: Secure admin panel with session persistence

### Gaming Product Catalog ✅
- **PlayStation 5 Console** - Rp 7,500,000
- **NVIDIA GeForce RTX 4090** - Rp 24,000,000
- **Xbox Series X Console** - Rp 7,500,000
- **Logitech G PRO X Gaming Headset** - Rp 1,950,000
- **Cyberpunk 2077: Ultimate Edition** - Rp 1,200,000
- **Razer DeathAdder V3 Gaming Mouse** - Rp 1,350,000
- **Intel Core i9-13900K Processor** - Rp 8,850,000
- **Steam Deck OLED 512GB** - Rp 8,250,000

## 🛠 Technology Stack

- **Framework**: SvelteKit with TypeScript
- **Styling**: TailwindCSS with gaming theme
- **Icons**: Lucide Svelte
- **Charts**: Chart.js for admin analytics
- **State Management**: Svelte stores (auth, cart, toast)
- **Currency**: Indonesian Rupiah (IDR) formatting
- **Images**: Product image management system
- **Build Tool**: Vite
- **Deployment**: GitHub Pages (static)

## 📁 Project Structure

```
gametech-store/
├── src/
│   ├── lib/
│   │   ├── components/          # Reusable components
│   │   │   ├── ui/             # Basic UI components
│   │   │   └── Toast.svelte    # Notification system
│   │   ├── stores/             # Svelte stores
│   │   │   ├── auth.ts         # Authentication state
│   │   │   ├── cart.ts         # Shopping cart state
│   │   │   └── toast.ts        # Toast notifications
│   │   ├── utils/              # Utility functions
│   │   │   └── index.ts        # IDR formatting, etc.
│   │   ├── data/               # Gaming product data
│   │   │   ├── products.ts     # 8 gaming products
│   │   │   └── orders.ts       # Indonesian order data
│   │   └── types/              # TypeScript definitions
│   ├── routes/                 # SvelteKit routes
│   │   ├── admin/              # Complete admin panel
│   │   │   ├── +page.svelte    # Dashboard
│   │   │   ├── products/       # Product management
│   │   │   ├── orders/         # Order management
│   │   │   ├── users/          # User management
│   │   │   ├── settings/       # Store settings
│   │   │   └── login/          # Admin login
│   │   ├── shop/               # Shop page
│   │   ├── product/[slug]/     # Product detail pages
│   │   ├── cart/               # Shopping cart
│   │   ├── checkout/           # Checkout process
│   │   ├── payment/            # Payment page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   └── legal/              # Terms, Privacy, etc.
│   └── app.css                 # Global gaming theme
├── static/images/              # Product images
│   ├── products/               # 40 product images (8×5 each)
│   └── categories/             # 4 category images
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or compatible package manager (pnpm, yarn, npm)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gametech-store
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Demo Credentials

**Admin Login:**
- Username: `admin`
- Password: `admin123`

## 🎮 Live Demo

### Customer Journey
1. **Browse Products**: Visit homepage and shop page
2. **View Details**: Click any product for detailed view with image gallery
3. **Add to Cart**: Use quantity selector and get toast notifications
4. **Checkout**: Complete 3-step checkout process
5. **Payment**: Indonesian bank transfer instructions

### Admin Panel
1. **Login**: Use admin credentials at `/admin/login`
2. **Dashboard**: View sales analytics and order summaries
3. **Manage Products**: CRUD operations on gaming products
4. **Track Orders**: Monitor Indonesian customer orders
5. **Settings**: Configure store preferences

## 🏗 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run type checking
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

### Code Quality

The project follows strict code quality standards:
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Component-based** architecture
- **Mobile-first** responsive design

## 📱 Pages & Routes

### Public Pages ✅
- `/` - Homepage with featured gaming products
- `/shop` - Complete product catalog with filtering
- `/product/[slug]` - Product detail pages with image galleries
- `/cart` - Shopping cart with quantity management
- `/checkout` - 3-step checkout process
- `/payment` - Indonesian bank transfer payment
- `/about` - Gaming company story and team
- `/contact` - Contact form with Indonesian validation
- `/legal/terms` - Terms of service
- `/legal/privacy` - Privacy policy
- `/legal/shipping` - Shipping information
- `/legal/returns` - Return policy

### Admin Pages ✅ (Protected)
- `/admin/login` - Admin login
- `/admin` - Dashboard with analytics
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/users` - User management
- `/admin/settings` - Store settings

## 🎨 Design System

### Gaming Theme
- **Colors**: Dark gray backgrounds with cyan/purple gradients
- **Typography**: Bold headings with gradient text effects
- **Components**: Rounded corners, backdrop blur, hover animations
- **Gaming Elements**: Console/PC gaming aesthetics
- **Mobile Responsive**: Optimized layouts for all screen sizes

### Indonesian Localization
- **Currency**: Indonesian Rupiah (IDR) formatting
- **Addresses**: Indonesian postal format with provinces
- **Phone**: +62 format validation
- **Payment**: BCA, Mandiri, BNI bank transfer
- **Shipping**: Indonesian logistics (JNE, TIKI, Pos Indonesia)

## 📊 Data Models

### Product
- UUID-based identification with SEO slugs
- Gaming hardware specifications
- Indonesian Rupiah pricing with 11% PPN tax
- High-quality product images (featured + 4 thumbnails)
- Gaming categories and tags
- Inventory tracking

### Order
- Indonesian customer information
- Gaming product line items
- IDR pricing with tax calculations
- Bank transfer payment methods
- Order tracking with GameTech numbering (GT-2024-XXX)

### Cart
- localStorage persistence
- Real-time quantity management
- Indonesian tax and shipping calculations
- Toast notification integration

## 🚀 Deployment

### GitHub Pages Setup

1. **Configure repository**
   - Enable GitHub Pages in repository settings
   - Set source to "GitHub Actions"

2. **Build and deploy**
   ```bash
   pnpm build
   ```

3. **Custom domain** (optional)
   ```bash
   BASE_PATH=/your-repo-name pnpm build
   ```

The build output in the `build/` directory can be deployed to any static hosting service.

## 🖼️ Image Management

### Product Images
- **Featured Images**: 1200x1200px for main product display
- **Thumbnails**: 4 per product for gallery view
- **Categories**: 800x600px for category headers
- **Format**: JPG optimized for web
- **Fallbacks**: Graceful emoji fallbacks for missing images

### Adding New Images
1. Add images to `static/images/products/`
2. Follow naming convention: `product-slug.jpg`, `product-slug-1.jpg`, etc.
3. Update product data in `src/lib/data/products.ts`
4. Images automatically display across all pages

## 🎯 Features Completed

### ✅ Phase 1: Foundation
- [x] Project setup and gaming theme
- [x] Indonesian localization (IDR, addresses, payments)
- [x] Authentication system with admin panel
- [x] Product data models with UUID system
- [x] Homepage with gaming aesthetics

### ✅ Phase 2: Admin Panel
- [x] Complete admin dashboard with analytics
- [x] Product management CRUD operations
- [x] Order management with Indonesian data
- [x] User management system
- [x] Store settings configuration

### ✅ Phase 3: Public Store
- [x] Shop page with advanced filtering and search
- [x] Product detail pages with image galleries
- [x] Shopping cart with localStorage persistence
- [x] Complete checkout process (3 steps)
- [x] Indonesian payment system (bank transfer)

### ✅ Phase 4: Enhancement
- [x] Toast notification system
- [x] Mobile responsive optimization
- [x] Product image management system
- [x] Error handling and fallbacks
- [x] Professional gaming design theme

## 🌟 Key Highlights

- **Complete E-commerce Solution**: Fully functional online store
- **Gaming Market Focus**: Authentic gaming hardware catalog
- **Indonesian Market Ready**: Full localization for Indonesian customers
- **Professional Design**: Modern dark gaming theme
- **Mobile Optimized**: Perfect experience on all devices
- **Portfolio Ready**: Demonstrates full-stack development skills

## 📄 License

This project is for demonstration and portfolio purposes.

## 📞 Support

For questions about this project:
- Review the type definitions in `src/lib/types/`
- Look at existing components for patterns

---

**Status**: ✅ Complete Gaming E-commerce Platform  
**Market**: Indonesian Gaming Hardware Store  
**Theme**: Dark Gaming Aesthetics with Cyan/Purple Gradients  
**Features**: Fully functional admin panel, customer store, and checkout system
