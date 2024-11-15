import { db } from './firebase';
import { collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

const COLLECTIONS = {
    USERS: 'users',
    LEARNING_PROGRESS: 'learning_progress'
};

const createDefaultProgress = (userId) => ({
    userId,
    coursesCompleted: 0,
    questsCompleted: 0,
    totalPoints: 0,
    hoursLearned: 0,
    courses: [],
    lastUpdated: new Date()
});

class DatabaseService {
    static async getUserProgress(userId) {
        try {
            const userProgressRef = doc(db, COLLECTIONS.LEARNING_PROGRESS, userId);
            const progressSnapshot = await getDoc(userProgressRef);

            if (progressSnapshot.exists()) {
                return progressSnapshot.data();
            } else {
                const newProgress = createDefaultProgress(userId);
                await setDoc(userProgressRef, newProgress);
                return newProgress;
            }
        } catch (error) {
            console.error('Error getting user progress:', error);
            throw error;
        }
    }

    static async updateUserProgress(userId, progressData) {
        try {
            const userProgressRef = doc(db, COLLECTIONS.LEARNING_PROGRESS, userId);

            await setDoc(userProgressRef, {
                ...progressData,
                lastUpdated: new Date()
            }, { merge: true });

            return true;
        } catch (error) {
            console.error('Error updating user progress:', error);
            throw error;
        }
    }

    static async addCourseToProgress(userId, courseData) {
        try {
            const userProgressRef = doc(db, COLLECTIONS.LEARNING_PROGRESS, userId);
            const progressSnapshot = await getDoc(userProgressRef);

            if (progressSnapshot.exists()) {
                const currentProgress = progressSnapshot.data();
                const updatedCourses = [...currentProgress.courses, courseData];

                await updateDoc(userProgressRef, {
                    courses: updatedCourses,
                    coursesCompleted: currentProgress.coursesCompleted + 1,
                    lastUpdated: new Date()
                });

                return true;
            }
            return false;
        } catch (error) {
            console.error('Error adding course:', error);
            throw error;
        }
    }

    static async updateCourseProgress(userId, courseId, updateData) {
        try {
            const userProgressRef = doc(db, COLLECTIONS.LEARNING_PROGRESS, userId);
            const progressSnapshot = await getDoc(userProgressRef);

            if (progressSnapshot.exists()) {
                const currentProgress = progressSnapshot.data();
                const courseIndex = currentProgress.courses.findIndex(
                    course => course.id === courseId
                );

                if (courseIndex !== -1) {
                    const updatedCourses = [...currentProgress.courses];
                    updatedCourses[courseIndex] = {
                        ...updatedCourses[courseIndex],
                        ...updateData
                    };

                    await updateDoc(userProgressRef, {
                        courses: updatedCourses,
                        lastUpdated: new Date()
                    });

                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error('Error updating course progress:', error);
            throw error;
        }
    }

    static async getCourseProgress(userId, courseId) {
        try {
            const progress = await this.getUserProgress(userId);
            return progress.courses.find(course => course.id === courseId) || null;
        } catch (error) {
            console.error('Error getting course progress:', error);
            throw error;
        }
    }

    static async getAllUsersProgress() {
        try {
            const progressRef = collection(db, COLLECTIONS.LEARNING_PROGRESS);
            const snapshot = await getDocs(progressRef);
            return snapshot;
        } catch (error) {
            console.error('Error getting all users progress:', error);
            throw error;
        }
    }
}

export {
    DatabaseService,
    COLLECTIONS
};