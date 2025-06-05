import time
import pyautogui


def autoclick(delay=1.0):
    """Click the mouse repeatedly every `delay` seconds."""
    try:
        while True:
            pyautogui.click()
            time.sleep(delay)
    except KeyboardInterrupt:
        print("Autoclicker stopped")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Simple autoclicker for testing.")
    parser.add_argument(
        "--delay", type=float, default=1.0, help="Delay between clicks in seconds"
    )
    args = parser.parse_args()

    autoclick(args.delay)
