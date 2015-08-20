package study;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;

/**
 * jiangyukun on 2015-08-19.
 */
public class Nio {
    public static void main(String[] args) throws IOException {
        Selector selector = Selector.open();
        ServerSocketChannel channel = ServerSocketChannel.open();
        channel.bind(new InetSocketAddress(1234));
        channel.configureBlocking(false);
        channel.register(selector, SelectionKey.OP_ACCEPT);
        while (true) {
            int keys = selector.select();
            if (keys > 0) {
                selector.selectedKeys().forEach(key -> {
                    System.out.println(key.isAcceptable());
                });
            }
        }
    }
}
