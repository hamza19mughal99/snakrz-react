import Dashboard from "../components/Admin/Pages/dashboard/ecommerce";
import AdminVendor from "../components/Admin/Pages/adminvendor/vendor";
import AdminCustomers from "../components/Admin/Pages/adminCustomer/customer";


// Vendor Routes
import EcommerceDashboard from "../components/vendor/Pages/dashboard/ecommerce";
import Menu from "../components/vendor/Pages/Menu/Menu";
import Review from "../components/vendor/Pages/Review/Review";
import Setting from "../components/vendor/Pages/Setting/Setting";
import Gallery from "../components/vendor/Pages/Gallery/Gallery"


export const VendorLayoutPath = [
	
	{
		path: 'dashboard',
		component: EcommerceDashboard
	},
	{
		path: 'menu',
		component: Menu
	},
	
	{
		path: 'review',
		component: Review
	},
	{
		path: 'gallery',
		component: Gallery
	},
	{
		path: 'settings',
		component: Setting
	},	
	
]

export const AdminLayoutPath = [
	{
		path: 'dashboard',
		component: Dashboard
	},
	{
		path: 'vendor',
		component: AdminVendor
	},
	{
		path: 'customer',
		component: AdminCustomers
	},

]