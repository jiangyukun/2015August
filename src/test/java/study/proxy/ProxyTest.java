package study.proxy;

import org.junit.Test;
import study.proxy.annotation.Proxy;

import java.lang.reflect.Constructor;

/**
 * jiangyukun on 2015-08-24.
 */
public class ProxyTest {
    @Test
    public void testStart() throws Exception {
        CellPhone cellPhone = new CellPhone();
        Proxy[] anno = CellPhone.class.getAnnotationsByType(Proxy.class);
        if (anno.length != 0) {
            Proxy proxy = anno[0];
            String proxyName = proxy.proxyName();
            Class<?> p = getClass().getClassLoader().loadClass(proxyName);
            Constructor<?> cons = p.getConstructor(CellPhone.class);
            CellPhoneProxy proxy1 = (CellPhoneProxy) cons.newInstance(cellPhone);
            proxy1.start();
        }
    }
}
