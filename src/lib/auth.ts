import { compare, hash } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import speakeasy from 'speakeasy';
import { CONFIG } from './config';
import { prisma } from './db';

export async function hashPassword(password: string) {
  return hash(password, CONFIG.SECURITY.PASSWORD_SALT_ROUNDS);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return compare(password, hashedPassword);
}

export function generateTwoFactorSecret() {
  return speakeasy.generateSecret({
    name: CONFIG.SECURITY.TWO_FACTOR_ISSUER,
  });
}

export function verifyTwoFactorToken(secret: string, token: string) {
  return speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token,
  });
}

export function generateAntiPhishingCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export async function createSession(userId: string) {
  const token = sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: CONFIG.SECURITY.JWT_EXPIRY,
  });

  return token;
}

export async function verifySession(token: string) {
  try {
    const decoded = verify(token, process.env.JWT_SECRET!) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    return user;
  } catch {
    return null;
  }
}