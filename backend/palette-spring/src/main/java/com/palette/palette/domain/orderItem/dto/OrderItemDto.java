package com.palette.palette.domain.orderItem.dto;

import com.palette.palette.domain.orderItem.entity.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDto {

    private Long itemId;

    private List<OrderItemOptionDto> itemOptions;

}
