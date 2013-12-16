package stefanholzmueller.lottery.repository;

import org.springframework.data.repository.CrudRepository;
import stefanholzmueller.lottery.entity.Lottery;

public interface LotteryRepository extends CrudRepository<Lottery, Long>{
}
