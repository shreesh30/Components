import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        feugiat tristique. Sed suscipit tincidunt consectetur. Duis vitae
        pretium dui. Vestibulum at dui in turpis finibus mollis. Praesent semper
        bibendum convallis. Integer sagittis consequat mi sit amet faucibus.
        Vivamus pellentesque ultricies elit, at tincidunt mauris tempor ac.
        Quisque et justo sit amet arcu porttitor aliquet vitae sit amet metus.
        Duis maximus id ligula et tristique.
      </p>
    </div>
  );
}

export default ModalPage;
