package com.palette.palette.domain.feed.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.palette.palette.domain.feed.dto.list.FeedReqDto;
import com.palette.palette.domain.feed.dto.image.FeedImageReqDto;
import com.palette.palette.domain.hashtag.entity.FeedHashtag;
import com.palette.palette.domain.hashtag.entity.Hashtag;
import com.palette.palette.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@SQLDelete(sql = "UPDATE feeds SET is_delete = true, delete_at = CURRENT_TIMESTAMP WHERE feed_id = ?")  // delete 쿼리가 발생하면 해당 쿼리가 대신 실행.
@Where(clause = "is_delete = false") // select 쿼리가 발생할 때, 디폴트 값으로 추가되어서 쿼리가 실행.
@Entity
@Table(name = "feeds")
public class Feed {

    @Id
    @GeneratedValue
    @Column(name = "feed_id")
    private Long id;

    @Column(nullable = false)
    private String content;

    // 피드 이미지 리스트
    @OneToMany(mappedBy = "feed", cascade = CascadeType.ALL)
    private List<FeedImage> feedImages = new ArrayList<>();

    // 유저 - 피드 :: 양방향
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    // 좋아요 컬럼
    @Builder.Default()
    private Integer likeCount = 0;

    // 댓글 - 피드 추가해야함.

    // 피드 - 해시태그 :: 양방향
    @OneToMany(mappedBy = "feed", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FeedHashtag> hashtags;

    private LocalDateTime createAt;

    private LocalDateTime updateAt;

    private Boolean isDelete = Boolean.FALSE;

    private LocalDateTime deleteAt;


    /**
     * 피드 이미지 생성 메서드
     */
    public void addFeedImage(FeedImage feedImage) {
        System.out.println("add feed image");
        feedImages.add(feedImage);
        feedImage.setFeed(this);
    }

    //  dto -> entity
    public static Feed toEntity(FeedReqDto feedReqDto, List<FeedImageReqDto> feedImageReqDtos, User user, List<Hashtag> hashtags) {

        // 피드 생성
        Feed feed = Feed.builder()
                .content(feedReqDto.getContent())
                .user(user)
                .createAt(LocalDateTime.now())
                .isDelete(false)
                .build();

        // 해시태그 생성
        List<FeedHashtag> feedHashtagList = new ArrayList<>();
        for (Hashtag hashtag : hashtags) {
            FeedHashtag feedHashtag = FeedHashtag.builder()
                    .feed(feed)
                    .hashtag(hashtag)
                    .build();

            feedHashtagList.add(feedHashtag);
        }
        feed.setHashtags(feedHashtagList); // 생성된 FeedHashtag 데이터를 Feed 엔티티에 설정


        // 피드 이미지 생성
        List<FeedImage> feedImageList = new ArrayList<>();
        for (FeedImageReqDto feedImageReqDto : feedImageReqDtos) {
            FeedImage feedImage = FeedImage.builder()
                    .feed(feed)
                    .imagePath(feedImageReqDto.getFeedImage())
                    .build();

            feedImageList.add(feedImage);

            System.out.println("feedImage >>> " + feedImage.getImagePath());

        }
        feed.setFeedImages(feedImageList);

        System.out.println("feed >>> " + feed.getHashtags());

        return feed;
    }

    /**
     * 피드 수정
     */
    public void update(FeedReqDto feedReqDto, List<FeedImageReqDto> feedImages) {

        // 피드 수정
        this.content = feedReqDto.getContent();

        // 피드 이미지 생성
        List<FeedImage> feedImageList = new ArrayList<>();  // 피드 이미지
        for (FeedImageReqDto feedImageReqDto : feedImages) {

            // 피드 이미지
            FeedImage feedImage = FeedImage.builder()
                    .feed(this)
                    .imagePath(feedImageReqDto.getFeedImage())
                    .build();

            feedImageList.add(feedImage);

            System.out.println("feedImage >>> " + feedImage.getImagePath());
        }

        // 피드 해시태그 생성
        List<Hashtag> feedHashtagList = new ArrayList<>();  // 해시태그

        System.out.println("feedHashtagList >>> " + feedHashtagList);

        this.feedImages = feedImageList;
        this.updateAt = LocalDateTime.now();
    }

    /**
     * 피드 소프트 삭제
     */
    public void delete() {
        this.setDeleteAt(LocalDateTime.now());
    }

    /**
     * 피드 좋아요 추가
     */
    public void addLike() {
        this.likeCount += 1;
    }

    /**
     * 피드 좋아요 취소
     */
    public void cancelLike() {
        this.likeCount -= 1;
    }

}
