package stefanholzmueller.lottery.entities;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class LotteryTest {

    private EntityManager entityManager;

    @Before
    public void setUp() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("lotterytestPU");
        entityManager = emf.createEntityManager();
    }

    @After
    public void tearDown() {
        entityManager.close();
        entityManager.getEntityManagerFactory().close();
    }

    @Test
    public void testSave() {
        Lottery lottery = new Lottery();
        lottery.setDescription("try");

        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        entityManager.persist(lottery);
        transaction.commit();
    }

}
