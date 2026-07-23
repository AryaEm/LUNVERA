import { db } from "./firebase";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

export type CategoryKey = "warna" | "tipografi" | "layout" | "spacing" | "hierarchy" | "alignment";

export type CategoryMeta = {
  key: CategoryKey;
  label: string;
};

export type Comparison = {
  slug: string;
  categoryKey: CategoryKey;
  title: string;
  problem: string;
  whatChanged: string;
  lesson: string;
  badgeText?: string;
  impacts?: string[];
  showColorBar?: boolean;
};

/**
 * Ambil daftar semua kategori dari Firestore
 */
export async function getCategories(): Promise<CategoryMeta[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories: CategoryMeta[] = [];
    
    querySnapshot.forEach((docSnap) => {
      categories.push(docSnap.data() as CategoryMeta);
    });
    
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

/**
 * Ambil semua perbandingan berdasarkan categoryKey dari Firestore
 */
export async function getComparisonsByCategory(categoryKey: CategoryKey): Promise<Comparison[]> {
  try {
    const q = query(
      collection(db, "comparisons"),
      where("categoryKey", "==", categoryKey)
    );

    const querySnapshot = await getDocs(q);
    const comparisons: Comparison[] = [];

    querySnapshot.forEach((docSnap) => {
      comparisons.push({ slug: docSnap.id, ...docSnap.data() } as Comparison);
    });

    return comparisons;
  } catch (error) {
    console.error("Error fetching comparisons:", error);
    return [];
  }
}

/**
 * Ambil satu item perbandingan spesifik berdasarkan slug
 */
export async function getComparisonBySlug(slug: string): Promise<Comparison | null> {
  try {
    const docRef = doc(db, "comparisons", slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { slug: docSnap.id, ...docSnap.data() } as Comparison;
    }
    return null;
  } catch (error) {
    console.error("Error fetching comparison by slug:", error);
    return null;
  }
}