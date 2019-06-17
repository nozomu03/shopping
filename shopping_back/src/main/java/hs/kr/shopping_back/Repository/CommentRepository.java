package hs.kr.shopping_back.Repository;

import hs.kr.shopping_back.Domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
