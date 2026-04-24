import { ReactElement, FormEvent } from "react";
import styles from "./QuoteModal.module.css";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps): ReactElement | null {
  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>

        <div className={styles.modalHeader}>
          <h2>Get an Instant Quote</h2>
          <p>Fill out the form below and our packaging specialists will get back to you.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.half}>
              <label className={styles.label} htmlFor="Last_Name">Full Name*</label>
              <input type="text" className={styles.input} id="Last_Name" name="Last_Name" placeholder="John Doe" maxLength={80} required />
            </div>
            <div className={styles.half}>
              <label className={styles.label} htmlFor="Email">Email*</label>
              <input type="email" className={styles.input} id="Email" name="Email" placeholder="john@example.com" maxLength={100} required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <label className={styles.label} htmlFor="Phone">Phone*</label>
              <input type="text" className={styles.input} id="Phone" name="Phone" placeholder="(555) 123-4567" maxLength={30} required />
            </div>
            <div className={styles.half}>
              <label className={styles.label} htmlFor="Total_Quantity">Total Quantity</label>
              <input type="number" className={styles.input} id="Total_Quantity" name="Total_Quantity" placeholder="e.g. 1000" required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <label className={styles.label} htmlFor="Box_Size">Box Size</label>
              <input type="text" className={styles.input} id="Box_Size" name="Box_Size" maxLength={255} placeholder="Length x Width x Depth" required />
            </div>
            <div className={styles.half}>
              <label className={styles.label} htmlFor="Box_Type">Box Type</label>
              <select className={styles.select} id="Box_Type" name="Box_Type">
                <option value="-None-">Select Box Type</option>
                <option value="Straight Tuck Boxes">Straight Tuck Boxes</option>
                <option value="Reverse Tuck Boxes">Reverse Tuck Boxes</option>
                <option value="Lock Bottom Boxes">Lock Bottom Boxes</option>
                <option value="Holster Boxes">Holster Boxes</option>
                <option value="Tuck Top Boxes">Tuck Top Boxes</option>
                <option value="Sleeve Boxes">Sleeve Boxes</option>
                <option value="Two-Piece Boxes">Two-Piece Boxes</option>
                <option value="Folding Cartons">Folding Cartons</option>
                <option value="Rigid Boxes">Rigid Boxes</option>
                <option value="Seal End Box">Seal End Box</option>
                <option value="Beer Tray with lid">Beer Tray with lid</option>
                <option value="Book Style Boxes">Book Style Boxes</option>
                <option value="Dispenser Boxes">Dispenser Boxes</option>
                <option value="Cigar Box">Cigar Box</option>
                <option value="Flip Top Box">Flip Top Box</option>
                <option value="Tray with Sleeve">Tray with Sleeve</option>
                <option value="One Piece Boxes">One Piece Boxes</option>
                <option value="Suitcase Boxes">Suitcase Boxes</option>
                <option value="Auto-lock Bottom Boxes">Auto-lock Bottom Boxes</option>
                <option value="Display Boxes">Display Boxes</option>
                <option value="5-panel Hanger Boxes">5-panel Hanger Boxes</option>
                <option value="Crash Bottom Boxes">Crash Bottom Boxes</option>
                <option value="One-piece Tuck Top Boxes">One-piece Tuck Top Boxes</option>
                <option value="Boxes with Custom Cutouts">Boxes with Custom Cutouts</option>
                <option value="Boxes with Thumb Tabs">Boxes with Thumb Tabs</option>
                <option value="Bubble Mailers">Bubble Mailers</option>
                <option value="Roll end tuck top corrugated">Roll end tuck top corrugated</option>
                <option value="Hang Tab Boxes">Hang Tab Boxes</option>
                <option value="Pillow Boxes">Pillow Boxes</option>
                <option value="Snap Lock Bottom Boxes">Snap Lock Bottom Boxes</option>
                <option value="Paper Bags">Paper Bags</option>
                <option value="Mylar Bags">Mylar Bags</option>
                <option value="Die Cut Mylar Bags">Die Cut Mylar Bags</option>
                <option value="Mylar Pouches">Mylar Pouches</option>
                <option value="Mylar Ziplock bags">Mylar Ziplock bags</option>
                <option value="Heat seal mylar bags">Heat seal mylar bags</option>
                <option value="Custom zipper pouches">Custom zipper pouches</option>
                <option value="Circle mylar bags">Circle mylar bags</option>
                <option value="Sealed mylar bags">Sealed mylar bags</option>
                <option value="Cigarette boxes">Cigarette boxes</option>
                <option value="Chilled resistance boxes">Chilled resistance boxes</option>
                <option value="Clear Lid Display boxes">Clear Lid Display boxes</option>
                <option value="Takeout boxes">Takeout boxes</option>
                <option value="Gable boxes">Gable boxes</option>
                <option value="Handle boxes">Handle boxes</option>
                <option value="Tuck top mailer boxes">Tuck top mailer boxes</option>
                <option value="Double wall tuck top">Double wall tuck top</option>
                <option value="Hexagon boxes">Hexagon boxes</option>
                <option value="Popup Display Boxes">Popup Display Boxes</option>
                <option value="Pyramid Boxes">Pyramid Boxes</option>
                <option value="Window Display Boxes">Window Display Boxes</option>
                <option value="Telescope Boxes">Telescope Boxes</option>
                <option value="Cube Boxes">Cube Boxes</option>
                <option value="Round Top Boxes">Round Top Boxes</option>
                <option value="Roll End Tuck Top Boxes">Roll End Tuck Top Boxes</option>
                <option value="Roll End Lid Boxes">Roll End Lid Boxes</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.half} style={{ flex: '1 1 100%' }}>
              <label className={styles.label} htmlFor="Description">Specifications</label>
              <textarea
                className={styles.textarea}
                id="Description"
                name="Description"
                placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
              ></textarea>
            </div>
          </div>

          <div className={styles.hiddenRow}>
            <input type="hidden" name="City" value="" />
            <input type="hidden" name="State" value="" />
            <input type="hidden" name="Country" value="" />
            <select name="Lead_Source" defaultValue="Organic" hidden>
              <option value="Organic">Organic</option>
            </select>
            <select name="Medium" defaultValue="Popup Form" hidden>
              <option value="Popup Form">Popup Form</option>
            </select>
            <input type="hidden" name="IP" value="" />
            <input type="hidden" name="IP_to_ISP" value="" />
            <input type="hidden" name="IP_to_Org" value="" />
            <input type="hidden" name="Page_Title" value="" />
            <input type="hidden" name="Full_Page_URL" value="" />
            <input type="hidden" name="First_Visited_URL" value="" />
          </div>

          {/*  */}

          <div className={styles.row}>
            <button type="submit" className={styles.submitBtn}>
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
