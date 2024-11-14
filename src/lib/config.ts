export const CONFIG = {
  COMPANY: {
    NAME: 'CryptoHiveX',
    LOCATION: 'New York, USA',
    SUPPORT_EMAIL: 'support@cryptohivex.com',
  },
  TRADING: {
    MAX_LEVERAGE: 100,
    MARGIN_CALL_THRESHOLD: 0.8, // 80% of margin used
    LIQUIDATION_THRESHOLD: 0.95, // 95% of margin used
    SUPPORTED_FIATS: ['USD', 'EUR', 'GBP'],
    TRADING_FEES: {
      MAKER: 0.001, // 0.1%
      TAKER: 0.002, // 0.2%
    },
  },
  KYC: {
    LEVELS: {
      BASIC: {
        DAILY_WITHDRAW: 5000,
        REQUIRED_DOCS: ['ID_FRONT', 'ID_BACK', 'SELFIE'],
      },
      ADVANCED: {
        DAILY_WITHDRAW: 100000,
        REQUIRED_DOCS: ['ID_FRONT', 'ID_BACK', 'SELFIE', 'PROOF_OF_ADDRESS'],
      },
    },
  },
  SECURITY: {
    JWT_EXPIRY: '24h',
    REFRESH_TOKEN_EXPIRY: '7d',
    PASSWORD_SALT_ROUNDS: 12,
    TWO_FACTOR_ISSUER: 'CryptoHiveX',
    API_REQUEST_WINDOW: 5000, // 5 seconds window for API requests
  },
} as const;