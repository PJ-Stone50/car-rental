import React from "react";
import "./question.css";

function SecondQuestion() {
  return (
    <div>
      <p className="article">เมื่อมารับรถ คุณจำเป็นต้องมี:</p>

      <p className="article pl-[1.5rem]">
        <label className=" ">1. ใบอนุญาติขับขี่:</label>
        ผู้ขับขี่หลักจำเป็นต้องถือใบอนุญาตขับขี่ดังกล่าวมาแล้วอย่างน้อย 1 หรือ 2
        ปี (ขึ้นอยู่กับนโยบายของบริษัทเช่ารถแต่ละแห่ง)
        ผู้ขับขี่เสริมจำเป็นต้องแสดงใบอนุญาตขับขี่ของตนเช่นเดียวกัน
        หากใบอนุญาตขับขี่ของคุณไม่ได้เขียนโดยใช้ตัวอักษรภาษาอังกฤษ (เช่น
        เขียนโดยใช้ตัวอักษรอาหรับ อักษรกรีก อักษรรัสเซีย หรืออักษรจีน)
        คุณต้องนำใบอนุญาตขับขี่สากล (IDP)
        มาใช้ร่วมกับใบอนุญาตขับขี่ตัวจริงของคุณด้วย สำหรับข้อมูลเพิ่มเติม
        โปรดตรวจสอบข้อกำหนดและเงื่อนไขขณะทำการจอง
      </p>
      <p className="article pl-[1.5rem]">
        <label className=" ">2. บัตรเครดิต:</label>
        บัตรเครดิตจะต้องมีชื่อของผู้ขับขี่หลักอยู่บนบัตรและมีวงเงินเพียงพอสำหรับเป็นค่ามัดจำหรือค่าประกันที่เคาน์เตอร์เช่ารถ
      </p>
      <p className="article pl-[1.5rem]">
        <label className=" ">3. เอกสารยืนยันตัวตน :</label>
        ผู้ขับขี่จะต้องแสดงเอกสารยืนยันตัวตนที่มีรูปถ่าย
        (หนังสือเดินทางหรือบัตรประจำตัวประชาชน) หรือเอกสารยืนยันตัวตนใด ๆ
        ให้แก่บริษัท
      </p>
      <p className="article pl-[1.5rem]">
        <label className=" ">4. เวาเซอร์ที่พิมพฺ์มา :</label>
        ผู้ขับขี่จะต้องแสดงเวาเชอร์ที่พิมพ์มาเมื่อมารับรถ
        จะมีการเรียกเก็บค่าบริการเพิ่มเติม หากไม่สามารถแสดงเอกสารดังกล่าวได้
      </p>

      <p className=" gap-1 pt-[.5rem] ">
        <label className="font-semibold pr-[.5rem]">หมายเหตุสำคัญ</label>
        คุณจำเป็นต้องชำระค่าใช้จ่ายเพิ่มเติมสำหรับผู้ขับขี่เสริมและบริการเสริมใด
        ๆ ทั้งหมดเมื่อมารับรถ
        โปรดคำนึงถึงค่าใช้จ่ายเหล่านั้นเมื่อใช้บัตรเครดิตของคุณ
        หากคุณไม่สามารถแสดงบัตรเครดิตที่ใช้งานได้
        หรือบัตรเครดิตมีวงเงินไม่เพียงพอ
        หรือบัตรเครดิตไม่ได้เป็นชื่อของผู้ขับขี่หลัก
        พนักงานร้านขอสงวนสิทธิ์ในการปฏิเสธการเช่ารถ ในกรณีนี้
        จะไม่มีการคืนเงินใด ๆ ทั้งสิ้น
      </p>
    </div>
  );
}

export default SecondQuestion;