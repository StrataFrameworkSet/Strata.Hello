//////////////////////////////////////////////////////////////////////////////
// HelloServiceClientTest.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.client.requestreply;

import org.apache.http.ssl.SSLContextBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import strata.hello.service.requestreply.IHelloService;
import strata.hello.service.requestreply.SayHelloReply;
import strata.hello.service.requestreply.SayHelloRequest;

import javax.net.ssl.SSLContext;
import java.time.Instant;

import static org.junit.jupiter.api.Assertions.*;
import static strata.foundation.core.concurrent.Awaiter.await;

@Tag("IntegrationStage")
public
class HelloServiceClientTest
{
    private IHelloService itsTarget;

    @BeforeEach
    public void
    setUp() throws Exception
    {
        itsTarget = createTarget();
    }

    @AfterEach
    public void
    tearDown()
    {
        itsTarget = null;
    }

    @Test
    public void
    testSayHelloSync()
    {
        SayHelloRequest request =
            new SayHelloRequest()
                .setUser("John")
                .setGreeting("Hello")
                .setTimestamp(Instant.now());
        SayHelloReply reply =
            itsTarget.sayHelloSync(request);

        assertTrue(reply.isSuccess());
        assertEquals("Hello John",reply.getGreeting());
    }

    @Test
    public void
    testSayHelloAsync()
    {
        SayHelloRequest request =
            new SayHelloRequest()
                .setUser("Johan")
                .setGreeting("Guten Tag")
                .setTimestamp(Instant.now());
        SayHelloReply reply =
            await(itsTarget.sayHelloAsync(request));

        assertTrue(reply.isSuccess());
        assertEquals("Guten Tag Johan",reply.getGreeting());
    }

    @Test
    public void
    testSayHelloSyncWithException()
    {
        SayHelloRequest request =
            new SayHelloRequest()
                .setUser(null)
                .setGreeting("Hello")
                .setTimestamp(Instant.now());
        SayHelloReply reply =
            itsTarget.sayHelloSync(request);

        assertFalse(reply.isSuccess());
        assertTrue(reply.hasException());
        assertEquals(
            "request.user must be non-null",
            reply.getException().getExceptionMessage());
    }

    @Test
    public void
    testSayHelloAsyncWithException()
    {
        SayHelloRequest request =
            new SayHelloRequest()
                .setUser("John")
                .setGreeting(null)
                .setTimestamp(Instant.now());
            await(
                itsTarget
                    .sayHelloAsync(request)
                    .thenApply(
                        reply ->
                        {
                            assertFalse(reply.isSuccess());
                            assertTrue(reply.hasException());
                            assertEquals(
                                "request.greeting must be non-null",
                                reply.getException().getExceptionMessage());
                            return reply;
                        }));
    }

    protected IHelloService
    createTarget() throws Exception
    {
        return
            new HelloServiceClient("https://localhost:8080");
    }

    protected SSLContext
    getSslContext() throws Exception
    {
        Resource keystore = new ClassPathResource("hello-service.p12");

        return
            new SSLContextBuilder()
                .loadTrustMaterial(
                    keystore.getURL(),
                    "hello-service".toCharArray())
                .build();
    }
}

//////////////////////////////////////////////////////////////////////////////
