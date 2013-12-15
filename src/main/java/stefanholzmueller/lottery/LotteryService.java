package stefanholzmueller.lottery;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("lottery")
public class LotteryService {

    @Inject
    public LotteryService(LotteryManager manager) {
        this.manager = manager;
    }

    private LotteryManager manager;

    @GET
    @Path("test")
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return manager.hello();
    }

    @PUT
    @Path("draw")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String drawWinner(List<String> participants) {
        return participants.get(1);
    }
}
