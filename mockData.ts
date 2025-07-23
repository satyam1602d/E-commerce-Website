
import { Product, Category, User, Order, Review } from './types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20bluetooth%20headphones%20with%20sleek%20modern%20design%2C%20noise%20cancellation%20features%2C%20metallic%20finish%2C%20professional%20studio%20quality%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20high-end%20audio%20equipment%2C%20comfortable%20padded%20ear%20cups%2C%20adjustable%20headband%2C%20minimalist%20aesthetic&width=400&height=400&seq=headphones001&orientation=squarish',
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.',
    rating: 4.8,
    reviews: 324,
    inStock: true,
    tags: ['wireless', 'bluetooth', 'noise-cancelling'],
    brand: 'AudioTech',
    discount: 31
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://readdy.ai/api/search-image?query=Modern%20smart%20fitness%20watch%20with%20digital%20display%2C%20heart%20rate%20monitor%2C%20sleek%20black%20design%2C%20sport%20band%2C%20health%20tracking%20features%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20wearable%20technology%2C%20fitness%20tracker%2C%20smartwatch%20with%20multiple%20apps&width=400&height=400&seq=smartwatch001&orientation=squarish',
    category: 'Electronics',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life.',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    tags: ['fitness', 'smartwatch', 'health'],
    brand: 'FitTech',
    discount: 20
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://readdy.ai/api/search-image?query=Premium%20organic%20cotton%20t-shirt%20in%20navy%20blue%20color%2C%20soft%20fabric%20texture%2C%20classic%20fit%2C%20casual%20wear%2C%20comfortable%20everyday%20clothing%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20sustainable%20fashion%2C%20high%20quality%20garment%2C%20simple%20elegant%20design&width=400&height=400&seq=tshirt001&orientation=squarish',
    category: 'Clothing',
    description: 'Comfortable 100% organic cotton t-shirt in various colors. Sustainable and eco-friendly.',
    rating: 4.5,
    reviews: 89,
    inStock: true,
    tags: ['organic', 'cotton', 'sustainable'],
    brand: 'EcoWear',
    discount: 25
  },
  {
    id: '4',
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://readdy.ai/api/search-image?query=Stainless%20steel%20water%20bottle%20with%20insulated%20design%2C%20sleek%20silver%20finish%2C%20leak-proof%20cap%2C%20thermal%20insulation%2C%20eco-friendly%20hydration%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20sustainable%20drinkware%2C%20modern%20minimalist%20design&width=400&height=400&seq=waterbottle001&orientation=squarish',
    category: 'Home & Garden',
    description: 'Insulated stainless steel water bottle keeps drinks hot for 12 hours or cold for 24 hours.',
    rating: 4.7,
    reviews: 245,
    inStock: true,
    tags: ['stainless steel', 'insulated', 'eco-friendly'],
    brand: 'HydroLife',
    discount: 29
  },
  {
    id: '5',
    name: 'Leather Laptop Backpack',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://readdy.ai/api/search-image?query=Premium%20leather%20laptop%20backpack%20in%20brown%20color%2C%20professional%20business%20style%2C%20multiple%20compartments%2C%20padded%20laptop%20sleeve%2C%20durable%20construction%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20travel%20accessories%2C%20executive%20briefcase%20design&width=400&height=400&seq=backpack001&orientation=squarish',
    category: 'Bags & Luggage',
    description: 'Premium leather backpack with padded laptop compartment and multiple pockets.',
    rating: 4.4,
    reviews: 178,
    inStock: true,
    tags: ['leather', 'laptop', 'business'],
    brand: 'LeatherCraft',
    discount: 20
  },
  {
    id: '6',
    name: 'Wireless Gaming Mouse',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://readdy.ai/api/search-image?query=Wireless%20gaming%20mouse%20with%20RGB%20lighting%2C%20ergonomic%20design%2C%20precision%20sensor%2C%20gaming%20accessories%2C%20black%20color%20with%20colorful%20LED%20lights%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20high-performance%20gaming%20equipment&width=400&height=400&seq=gamingmouse001&orientation=squarish',
    category: 'Electronics',
    description: 'High-precision wireless gaming mouse with RGB lighting and customizable buttons.',
    rating: 4.6,
    reviews: 134,
    inStock: true,
    tags: ['gaming', 'wireless', 'rgb'],
    brand: 'GameTech',
    discount: 29
  },
  {
    id: '7',
    name: 'Ceramic Coffee Mug Set',
    price: 34.99,
    originalPrice: 44.99,
    image: 'https://readdy.ai/api/search-image?query=Set%20of%20ceramic%20coffee%20mugs%20in%20elegant%20white%20color%2C%20matching%20design%2C%20kitchen%20accessories%2C%20dishware%20collection%2C%20clean%20modern%20style%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20home%20dining%20essentials%2C%20quality%20porcelain%20mugs&width=400&height=400&seq=coffeemug001&orientation=squarish',
    category: 'Home & Garden',
    description: 'Set of 4 elegant ceramic coffee mugs perfect for daily use or special occasions.',
    rating: 4.3,
    reviews: 67,
    inStock: true,
    tags: ['ceramic', 'coffee', 'kitchen'],
    brand: 'HomeEssentials',
    discount: 22
  },
  {
    id: '8',
    name: 'Bluetooth Speaker',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://readdy.ai/api/search-image?query=Portable%20bluetooth%20speaker%20with%20cylindrical%20design%2C%20fabric%20mesh%20covering%2C%20wireless%20audio%20device%2C%20compact%20size%2C%20modern%20technology%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20high-quality%20sound%20system%2C%20portable%20entertainment&width=400&height=400&seq=speaker001&orientation=squarish',
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with 360-degree sound and 20-hour battery life.',
    rating: 4.5,
    reviews: 201,
    inStock: true,
    tags: ['bluetooth', 'portable', 'speaker'],
    brand: 'SoundWave',
    discount: 25
  }
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://readdy.ai/api/search-image?query=Modern%20electronics%20category%20showcase%20with%20smartphones%2C%20laptops%2C%20headphones%2C%20and%20gadgets%20arranged%20elegantly%2C%20technology%20theme%2C%20clean%20organized%20display%2C%20futuristic%20design%2C%20innovation%20concept%2C%20bright%20clean%20background%2C%20product%20category%20illustration&width=300&height=200&seq=electronics001&orientation=landscape',
    productCount: 156
  },
  {
    id: '2',
    name: 'Clothing',
    image: 'https://readdy.ai/api/search-image?query=Fashion%20clothing%20category%20display%20with%20shirts%2C%20dresses%2C%20and%20accessories%20beautifully%20arranged%2C%20fashion%20theme%2C%20stylish%20presentation%2C%20trendy%20apparel%2C%20clothing%20store%20aesthetic%2C%20clean%20modern%20background%2C%20fashion%20category%20illustration&width=300&height=200&seq=clothing001&orientation=landscape',
    productCount: 89
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://readdy.ai/api/search-image?query=Home%20and%20garden%20category%20showcase%20with%20decorative%20items%2C%20plants%2C%20furniture%2C%20and%20home%20accessories%2C%20cozy%20home%20atmosphere%2C%20interior%20design%20theme%2C%20comfortable%20living%20space%2C%20clean%20organized%20display%2C%20home%20category%20illustration&width=300&height=200&seq=home001&orientation=landscape',
    productCount: 234
  },
  {
    id: '4',
    name: 'Bags & Luggage',
    image: 'https://readdy.ai/api/search-image?query=Bags%20and%20luggage%20category%20display%20with%20backpacks%2C%20suitcases%2C%20and%20travel%20accessories%2C%20travel%20theme%2C%20organized%20presentation%2C%20quality%20leather%20goods%2C%20travel%20essentials%2C%20clean%20modern%20background%2C%20luggage%20category%20illustration&width=300&height=200&seq=bags001&orientation=landscape',
    productCount: 67
  },
  {
    id: '5',
    name: 'Sports & Outdoors',
    image: 'https://readdy.ai/api/search-image?query=Sports%20and%20outdoors%20category%20showcase%20with%20fitness%20equipment%2C%20outdoor%20gear%2C%20and%20sporting%20goods%2C%20active%20lifestyle%20theme%2C%20adventure%20concept%2C%20athletic%20equipment%20display%2C%20clean%20organized%20presentation%2C%20sports%20category%20illustration&width=300&height=200&seq=sports001&orientation=landscape',
    productCount: 123
  },
  {
    id: '6',
    name: 'Beauty & Health',
    image: 'https://readdy.ai/api/search-image?query=Beauty%20and%20health%20category%20display%20with%20skincare%20products%2C%20cosmetics%2C%20and%20wellness%20items%2C%20spa%20aesthetic%2C%20self-care%20theme%2C%20elegant%20presentation%2C%20clean%20luxury%20background%2C%20beauty%20category%20illustration&width=300&height=200&seq=beauty001&orientation=landscape',
    productCount: 98
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Smith',
  email: 'john.smith@example.com',
  avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20friendly%20man%20with%20short%20brown%20hair%2C%20wearing%20business%20casual%20attire%2C%20smiling%20warmly%2C%20clean%20studio%20background%2C%20corporate%20portrait%20style%2C%20approachable%20appearance%2C%20modern%20professional%20photography&width=100&height=100&seq=user001&orientation=squarish',
  addresses: [
    {
      id: '1',
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      isDefault: true
    }
  ],
  orders: [],
  wishlist: ['1', '3', '5']
};

export const mockOrders: Order[] = [
  {
    id: '1',
    userId: '1',
    items: [
      {
        id: '1',
        product: mockProducts[0],
        quantity: 1
      },
      {
        id: '2',
        product: mockProducts[2],
        quantity: 2
      }
    ],
    total: 149.97,
    status: 'delivered',
    shippingAddress: mockUser.addresses[0],
    paymentMethod: 'Credit Card',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '2',
    userId: '1',
    items: [
      {
        id: '3',
        product: mockProducts[1],
        quantity: 1
      }
    ],
    total: 199.99,
    status: 'shipped',
    shippingAddress: mockUser.addresses[0],
    paymentMethod: 'PayPal',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-26')
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: '1',
    userName: 'John Smith',
    productId: '1',
    rating: 5,
    comment: 'Amazing sound quality and comfortable to wear for long periods. Highly recommend!',
    createdAt: new Date('2024-01-10')
  },
  {
    id: '2',
    userId: '2',
    userName: 'Sarah Johnson',
    productId: '1',
    rating: 4,
    comment: 'Great headphones but the battery life could be better.',
    createdAt: new Date('2024-01-12')
  },
  {
    id: '3',
    userId: '3',
    userName: 'Mike Wilson',
    productId: '2',
    rating: 5,
    comment: 'Perfect fitness tracker with accurate heart rate monitoring.',
    createdAt: new Date('2024-01-14')
  }
];
