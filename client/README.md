# PDI Many - Frontend Code Organization

## 📁 Project Structure

```
client/
├── components/
│   ├── cards/               # Reusable card components
│   │   └── ServiceCard.tsx  # Individual service pricing card
│   ├── sections/            # Page section components
│   │   ├── HeroSection.tsx  # Homepage hero section
│   │   ├── PricingSection.tsx # Service pricing display
│   │   └── SparePartsSection.tsx # Spare parts request
│   ├── ui/                  # Base UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ... (other UI components)
│   └── Navigation.tsx       # Main site navigation
├── pages/
│   ├── Index.tsx           # Homepage (now simplified)
│   ├── About.tsx           # About page (placeholder)
│   ├── Career.tsx          # Career page (placeholder)
│   ├── Contact.tsx         # Contact page (placeholder)
│   └── Parts.tsx           # Parts page (placeholder)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── App.tsx                 # Main app component with routing
```

## 🧩 Component Organization

### 1. **HeroSection.tsx**
- **Purpose**: Main homepage hero section
- **Features**: 
  - Company branding and messaging
  - Call-to-action button
  - Trust indicators (statistics)
  - Professional car inspection image
- **Styling**: Custom dark teal background matching logo

### 2. **ServiceCard.tsx**
- **Purpose**: Reusable card for displaying services
- **Props**:
  - `service`: ServiceData object containing all service info
  - `onBookNow`: Optional callback for booking action
- **Features**:
  - Pricing display with original/discounted prices
  - Feature lists with checkmarks
  - Optional highlighting for popular services
  - Responsive design

### 3. **PricingSection.tsx**
- **Purpose**: Display all inspection services and pricing
- **Features**:
  - Grid layout for service cards
  - Service data management
  - Booking functionality placeholder
  - Responsive grid (1-4 columns based on screen size)

### 4. **SparePartsSection.tsx**
- **Purpose**: Handle spare parts requests
- **Features**:
  - Custom dark theme styling
  - Required information list
  - Google Forms integration
  - Professional presentation

## 🎨 Styling Approach

### Color Scheme
- **Primary**: Blue (`#0073E6`) - for main actions and highlights
- **Accent**: Yellow (`#FFAF1A`) - for call-to-action buttons
- **Background**: Dark Teal (`#2F4F4F`) - matching company logo
- **Text**: Various grays for hierarchy and readability

### CSS Organization
- **TailwindCSS**: Primary styling framework
- **Inline Styles**: Used sparingly for specific custom colors
- **Component Classes**: Consistent spacing and typography
- **Responsive Design**: Mobile-first approach

## 🔧 Data Management

### ServiceData Interface
```typescript
interface ServiceData {
  title: string;           // Service name
  price: string;           // Current price
  originalPrice: string;   // Original price (crossed out)
  discount: string;        // Discount text
  icon: LucideIcon;       // Icon component
  features: string[];      // List of features
  isHighlighted?: boolean; // Optional popular service flag
}
```

## 🚀 Usage Examples

### Adding a New Service
```typescript
// In PricingSection.tsx, add to services array:
{
  title: "Motorcycle Inspection",
  price: "$300",
  originalPrice: "$450",
  discount: "First 50 customers",
  icon: Bike, // Import from lucide-react
  features: [
    "Engine performance check",
    "Brake system inspection",
    "Chain and sprocket analysis"
  ]
}
```

### Modifying Hero Content
```typescript
// In HeroSection.tsx, update the trust indicators:
const trustIndicators = [
  { value: "1000+", label: "Inspections Completed" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "12h", label: "Report Delivery" }
];
```

## 📱 Responsive Design

- **Mobile**: Single column layout, stacked components
- **Tablet**: 2-column grid for services
- **Desktop**: 4-column grid for services, side-by-side hero
- **Large Desktop**: Maintains max-width container

## 🔍 SEO Considerations

- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Alt Text**: Descriptive alt text for images
- **Meta Information**: Can be added to each page component
- **Clean URLs**: React Router handles client-side routing

## 🧪 Testing Strategy

- **Component Testing**: Each component can be tested independently
- **Props Testing**: ServiceCard props can be easily mocked
- **Visual Testing**: Screenshots can be taken of each section
- **Accessibility**: Focus states and keyboard navigation

## 🔄 Future Improvements

1. **Data Layer**: Move service data to separate files or API
2. **State Management**: Add context for booking state
3. **Form Handling**: Replace Google Forms with custom forms
4. **Animation**: Add smooth transitions and loading states
5. **Error Handling**: Add error boundaries and loading states

## 📞 Support

For questions about the code organization or modifications, refer to this documentation or check the inline comments within each component file.
