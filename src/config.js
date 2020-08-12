const config = {
  all: {
    env: process.env.NODE_ENV || "development",
    isDev: process.env.NODE_ENV !== "production",
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== "undefined",
  },
  development: {
   
  },
  production: {
  
  }
};

export default config
