/**
 * Public routes that do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
];

/**
 * Routes that require authentication.
 * @type {string[]}
*/
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
];

/**
 * Prefix for API authentication routes.
 * @type {string[]}
 */
export const apiAuthPrefix = ["/api/auth"];

/**
 * API routes that require authentication.
 * @type {string[]}
 */
export const apiv1Prefix = [
    "/api/v1",
];

/**
 * Default redirect path after successful login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
