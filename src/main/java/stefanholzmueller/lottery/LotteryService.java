package stefanholzmueller.lottery;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("lottery")
public class LotteryService {

    @GET
    @Path("test")
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "Got it!";
    }

    @PUT
    @Path("draw")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String drawWinner(List<String> participants) {
        return participants.get(1);
    }
}
