package study.proxy.annotation;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * jiangyukun on 2015-08-24.
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface Proxy {
    String proxyName();
}
