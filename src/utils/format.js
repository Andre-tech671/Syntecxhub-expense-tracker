export const formatCurrency = (num, locale = "en-US", currency = "USD") =>
  num.toLocaleString(locale, { style: "currency", currency });
