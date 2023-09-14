//////////////////////////////////////////////////////////////////////////////
// HelloServiceClient.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.client.requestreply;

import jakarta.ws.rs.client.ClientBuilder;
import org.apache.hc.core5.ssl.SSLContextBuilder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import strata.client.core.service.AbstractRestClient;
import strata.hello.service.requestreply.IHelloService;
import strata.hello.service.requestreply.SayHelloReply;
import strata.hello.service.requestreply.SayHelloRequest;

import javax.net.ssl.SSLContext;
import java.util.concurrent.CompletionStage;


public
class HelloServiceClient
    extends AbstractRestClient
    implements IHelloService
{

    public
    HelloServiceClient(String baseUrl)
    {
        super(
            createBuilder(),
            preprocessBaseUrl(baseUrl),
            "hello-service/");

    }

    @Override
    public SayHelloReply
    sayHelloSync(SayHelloRequest request)
    {
        return
            doPostAsync("say-hello-sync",SayHelloReply.class,request)
                .toCompletableFuture()
                .join();
    }

    @Override
    public CompletionStage<SayHelloReply>
    sayHelloAsync(SayHelloRequest request)
    {
        return
            doPostAsync("say-hello-async",SayHelloReply.class,request);
    }

    private static String
    preprocessBaseUrl(String baseUrl)
    {
        return
            baseUrl.endsWith("/")
                ? baseUrl
                : baseUrl + '/';
    }

    private static ClientBuilder
    createBuilder() throws RuntimeException
    {
        return
            ClientBuilder
                .newBuilder()
                .sslContext(createSslContext());
    }

    private static SSLContext
    createSslContext() throws RuntimeException
    {
        try
        {
            Resource keystore = new ClassPathResource("hello-service.p12");
            return
                new SSLContextBuilder()
                    .loadTrustMaterial(
                        keystore.getURL(),
                        "hello-service".toCharArray())
                    .build();
        }
        catch (Exception e)
        {
            throw new RuntimeException(e);
        }

    }
}

//////////////////////////////////////////////////////////////////////////////
