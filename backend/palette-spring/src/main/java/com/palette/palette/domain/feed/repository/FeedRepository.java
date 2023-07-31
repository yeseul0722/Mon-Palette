package com.palette.palette.domain.feed.repository;

import com.palette.palette.domain.feed.entity.Feed;
import com.palette.palette.domain.user.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FeedRepository extends JpaRepository<Feed, Long> {

    /**
     * 피드 목록 조회 :: 삭제 여부 기분 (false)
     */
    @Query("select f from Feed f where f.isDelete = false order by f.createAt desc")
    Page<Feed> findAllByDelete(Pageable pageable);

    @Query("SELECT f.user.id FROM Feed f WHERE f.id = :feedId")
    Long findUserIdByFeedId(@Param("feedId") Long feedId);

    List<Feed> findAllByUser(User user);


}
