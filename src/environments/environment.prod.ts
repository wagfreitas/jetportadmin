export const environment = {
  production: true,
  appName: 'jetport',
  apiUrl: "https://appjetport.uc.r.appspot.com",
  firebase: {
    apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
    authDomain: "appjetport.firebaseapp.com",
    projectId: "appjetport",
    storageBucket: "appjetport.appspot.com",
    messagingSenderId: "1012648687100",
    appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
    measurementId: "G-KKPVFVGG77"
  },
  adminEmail: 'admin@jetport.com.br', // you need to create new account in firebase auth manually,
  defaultCarSettings: {
    prices: {
      default: {
        vehicles: {
          suv: {
            base_fare: "1",
            base_km: "10",
            commission_type: "percentage",
            commission_value: "5",
            icon: "assets/img/suv.svg",
            map_icon: "assets/img/map-suv.png",
            name: "SUV",
            per_km: "1",
            seats: "4",
            tax: "5",
            type: "suv",
          }
        }
      }
    }
  },
  defaultSettings: {
    canDriverSignup: true,
    canRiderSignup: true,
    currency: "$",
    driverInitialRating: "5",
    driverPrivacyURL: "https://mythemebox.com/terms",
    driverSignupBonus: "10",
    driverSupportURL: "https://mythemebox.com/contact",
    driverTermsURL: "https://mythemebox.com/terms",
    riderPrivacyURL: "https://mythemebox.com/terms",
    riderSupportURL: "https://mythemebox.com/contact",
    riderTermsURL: "https://mythemebox.com/terms",
    sos: "911"
  }
};