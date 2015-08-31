package study;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.nio.charset.Charset;

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
                    try {
                        if (key.isAcceptable()) {
                            System.out.println("acceptable");
                            SocketChannel tmpSocketChannel = channel.accept();
                            tmpSocketChannel.configureBlocking(false);
                            tmpSocketChannel.register(selector, SelectionKey.OP_READ);
                        } else if (key.isReadable()) {
                            System.out.println("read");
                            SocketChannel t = (SocketChannel) key.channel();
                            ByteBuffer buffer = ByteBuffer.allocate(1024);
                            t.read(buffer);
                            System.out.println(buffer.getChar());
                            t.write(Charset.forName("UTF-8").encode("Server Handler Done!"));
                            t.close();
                        } else if (key.isWritable()) {
                            System.out.println("writable");
                            SocketChannel t = (SocketChannel) key.channel();
                            t.write(Charset.forName("UTF-8").encode("Server Handler Done!"));
                        } else if (key.isConnectable()) {
                            System.out.println("connectable");
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                });
                selector.selectedKeys().clear();
            }
        }
    }

    class B {
        class C {

        }
    }
}
