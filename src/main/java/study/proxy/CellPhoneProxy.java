package study.proxy;

/**
 * jiangyukun on 2015-08-24.
 */
public class CellPhoneProxy {
    private CellPhone cellPhone;

    public CellPhoneProxy(CellPhone cellPhone) {
        this.cellPhone = cellPhone;
    }

    public void start() {
        System.out.println("self check...");
        cellPhone.start();
        System.out.println("start finish...");
    }
}
