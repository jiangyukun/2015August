package study.classloader;

import org.junit.Test;

/**
 * jiangyukun on 2015-08-25.
 */
public class ClassLoaderTest {
    @Test
    public void test() {
        ClassLoader classLoader = ClassLoaderTest.class.getClassLoader();
        System.out.println(classLoader);
        for (Class clazz : classLoader.getClass().getEnclosingClass().getDeclaredClasses()) {
            System.out.println(clazz);
        }
    }
}
